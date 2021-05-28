
import { LitElement, html } from 'lit-element';

import iconsClass from './styles/CustomIcons-style.js'


export class FontawesomeIcon extends LitElement {

  static get styles(){
    return [iconsClass ];
  }

  static get is(){
    return 'fontawesome-icon';
  }

  static get properties() {
    return {

      icon: {type: String},

      selected: {type: Boolean},

      iconSize: {type: Number, attribute: 'icon-size'},
      
      identifier: {type: String, attribute: 'icon-group'},

    };
  }

  constructor(){
      super();
      this.selected = false;

      this.icon = "info"
  }


  update(){
    super.update();
  }

  iconClick(){
    this.dispatchEvent(new CustomEvent("icon-click", {
      bubbles: true,
      composed: true,
      detail: {id: this.identifier, icon: this.icon }
    }));
  }
  
  _getIcon(){
    return html `
      <div 
        @click="${this.iconClick}"
        class="icon ${this.icon} ${this.selected ? `selected` : ``}"  
      ></div>
    `
  }

  render(){
      return html`
        ${this._getIcon()}
      `;
  }

}

customElements.define(FontawesomeIcon.is , FontawesomeIcon);