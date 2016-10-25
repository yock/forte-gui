# Forte

Share *nix users with reasonable security.

## Why?

It's somewhat common for teams to share user accounts on *nix servers to simplify authorization for things like server directories and sudo. User groups work but making the most of those often requires altering the default, usually secure, configuration of common pieces of software (e.g. Apache). Rather than just Trying Harder&trade; to get everyone to use groups, Forte seeks to make user sharing more secure.

## How to Use Forte

Most will be familiar with username & password authentication. You run the SSH client with arguments for hostname and username, then you're prompted for a password. If this is a shared account then you _share_ that password with your teammates. Maybe your team is very diligent in changing this on a regular basis and when team members leave but the risk and effort required to maintain this are both high.
