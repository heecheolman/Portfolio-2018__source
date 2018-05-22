let instance = null;

class Storage {
  constructor() {
    if(!instance) {
      instance = this;
    }
    
    this.option = {
    
    };
    
    return instance;
  }
}

export default Storage;