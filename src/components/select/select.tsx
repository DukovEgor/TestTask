import { DetailedHTMLProps, memo, SelectHTMLAttributes } from 'react';
import { IVariant } from '../../types/variant';

interface SelectProps
    extends DetailedHTMLProps<
        SelectHTMLAttributes<HTMLSelectElement>,
        HTMLSelectElement
    > {
    direction: string;
    variants: Array<IVariant | undefined> | undefined;
}

function Select({ direction, variants, ...rest }: SelectProps) {
    return (
        <select
            className="fieldset__select"
            name="from-currency"
            {...rest}
            disabled={!variants?.length}
        >
            {variants?.map((dir) => (
                <option
                    key={`${dir?.name}-from`}
                    className="fieldset__option"
                    value={dir?.code}
                >
                    {dir?.name}
                </option>
            ))}
        </select>
    );
}

export default memo(Select);
