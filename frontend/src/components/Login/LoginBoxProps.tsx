export interface LoginBoxProps {
  boxChangeFunction: () => void; // function prop accepting a string
}

export interface ForgotBoxProps {
  boxChangeFunction: () => void; // function prop accepting a string
  handleForgotFunction: ()=> void;
}
