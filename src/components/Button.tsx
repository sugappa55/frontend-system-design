import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  loading: boolean;
  variant: 'text' | 'outlined' | 'contained';
  color: 'primary' | 'secondary';
};

const variantClasses: Record<ButtonProps['variant'], string> = {
  text: '',
  outlined: 'border border-current',
  contained: 'bg-current'
};

const colors = {
  primary: 'text-blue-600',
  secondary: 'text-green-600'
};
const Button = ({ children, loading = false, variant = 'text', color = 'primary' }: ButtonProps) => {
  return <button className='border-current'>{children}</button>;
};

export default Button;
