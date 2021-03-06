import { LitElement, html, css } from 'lit-element';

export default css`
.icon {
  display: inline-block;
  width: var(--icon-size, 32px);
  height: var(--icon-size, 32px);
  -webkit-mask-size: cover;
          mask-size: cover;
  background: var(--icon-color, var(--dark-color, #02010A));
}

.icon:hover {
  background-color: var(--icon-color-hover, var(--accent-primary, #3482D5));
}

.star {
  background: var(--light-color, #bcccce);
  border: inset 1px solid var(--light-color, #49585A);
  -webkit-mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_star.svg");
          mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_star.svg");
  -webkit-transition: -webkit-transform 200ms ease-in-out;
  transition: -webkit-transform 200ms ease-in-out;
  transition: transform 200ms ease-in-out;
  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
}

.star:hover {
  -webkit-transform: scale(1.3);
          transform: scale(1.3);
  -webkit-transition: -webkit-transform 200ms ease-in-out;
  transition: -webkit-transform 200ms ease-in-out;
  transition: transform 200ms ease-in-out;
  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;
  background-color: var(--accent-secondary, #FF7C5C) !important;
}

.star.selected {
  background-color: var(--accent-primary, #3482D5);
}

.more {
  -webkit-mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_more.svg");
          mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_more.svg");
}

.info {
  -webkit-mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_info.svg");
          mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_info.svg");
}

.close {
  -webkit-mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_close.svg");
          mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_close.svg");
}

.add {
  -webkit-mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_add.svg");
          mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_add.svg");
}

.arrow-down {
  -webkit-mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_arrow-down.svg");
          mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_arrow-down.svg");
}

.edit {
  -webkit-mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_edit.svg");
          mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_edit.svg");
}

.back {
  -webkit-mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_back.svg");
          mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_back.svg");
}

.chat {
  -webkit-mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_chat.svg");
          mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_chat.svg");
}

.questionmark {
  -webkit-mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_questionmark.svg");
          mask-image: url("./node_modules/fontawesome-icon/assets/icons/iconfinder_questionmark.svg");
}
`