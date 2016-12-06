#!/usr/bin/env bash

HEADER="## Begin Forte keys ##"
FOOTER="## End Forte keys ##"
HEADER_PATTERN="^$HEADER$"
FOOTER_PATTERN="^$FOOTER$"
VERBOSE="0"
DELETE_EXISTING="0"
CONFIRM_REPLACE="yes"
DO_REPLACE="no"

while getopts :fRv opt; do
  case $opt in
    f)
      CONFIRM_REPLACE="no"
      DO_REPLACE="yes"
      ;;
    R)
      DELETE_EXISTING="1"
    v)
      VERBOSE="1"
      ;;
  esac
done

function logger {
  if [ "$VERBOSE" == "1" ]; then
    echo $1
  fi
}

function replace_forte_keys {
  sed -e "/$HEADER_PATTERN/,/$FOOTER_PATTERN/{ /$HEADER_PATTERN/{p; r forte_keys
          }; /$FOOTER_PATTERN/p; d}" ~/.ssh/authorized_keys > ./new_authorized_keys
}

function ensure_contains {
  file=$1
  text=$2

  grep "^$text$" $file

  if [ "$?" == "1"]; then
    logger "Appending $text to $file"
    echo "$text\n" >> $file
  fi
}

function commit_replace {
  ensure_contains $HEADER
  ensure_contains $FOOTER

  logger "Replacing authorized_keys file"
  mv ./new_authorized_keys ~/.ssh/authorized_keys
}

logger "Producing new authorized_keys file"
if [ "$DELETE_EXISTING" == "1" ]; then
  echo "$HEADER\n" > ./new_authorized_keys
  cat forte_keys >> ./new_authorized_keys
  echo "\n$FOOTER\n" >> ./new_authorized_keys
else
  replace_forte_keys
fi

if [ "$CONFIRM_REPLACE" == "yes" ]; then
  diff ~/.ssh/authorized_keys ./new_authorized_keys
  echo "Update existing authorized keys file with these changes (type \"yes\" to confirm)?"
  read DO_REPLACE
fi

if [ "$DO_REPLACE" == "yes" ]; then
  commit_replace
fi

logger "Removing temporary keys file"
rm forte_keys

logger "Done"
