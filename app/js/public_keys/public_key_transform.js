class PublicKeyTransform {
  constructor(publicKey, properties) {
    this.data = publicKey;
    this.properties = properties
  }

  transformedObject() {
    return Object.assign({
      key: this.data.id,
      sshKey: this.data.key,
      comment: this.data.comment,
      forteType: 'publicKey'
    }, this.properties);
  }
}

export default PublicKeyTransform;
