'use client';

interface FieldProps {
  label: string;
  type?: string;
  onChangeValue: (value: string) => void;
  children?: React.ReactNode;
}

export const Field = ({
  label,
  type = 'text',
  onChangeValue,
  children,
}: FieldProps) => {
  const changeValue = (value: string) => {
    onChangeValue(value);
  };

  return (
    <div className="flex flex-col my-4">
      <label>{label}</label>
      <input
        type={type}
        className="border-4 border-solid border-t-[#333] border-l-red-200 border-r-red-600 border-b-blue-500"
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          changeValue(e.target.value)
        }
      />
      {children}
    </div>
  );
};

export default Field;
