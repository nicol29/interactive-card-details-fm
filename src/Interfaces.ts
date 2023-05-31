export interface CardState {
  cardNum: string | null;
  name: string;
  date: {
    month: number | null;
    year: number | null;
  };
  cvc: number | null;
}

export interface Errors {
  name: string | null;
  cardNum: string | null;
  month: string | null;
  year: string | null;
  cvc: string | null;
}

export interface propsInterface {
  errors: Errors,
  setErrors: React.Dispatch<React.SetStateAction<Errors>>,
  cardState: CardState,
  setCardState: React.Dispatch<React.SetStateAction<CardState>>;
}