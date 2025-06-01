interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  location: string;
  date: string;
}

interface ButtonProps {
  label: string;
  onClick: () => void;
}
