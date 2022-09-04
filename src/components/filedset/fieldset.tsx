import { GROUPS } from '../../data/data';
import {
    DetailedHTMLProps,
    FieldsetHTMLAttributes,
    FormEvent,
    memo,
    useCallback,
} from 'react';
import {
    setFilterFrom,
    setFilterTo,
} from '../../store/app-process/app-process';
import { useAppDispatch, useAppSelector } from '../../hooks';

interface FieldsetProps
    extends DetailedHTMLProps<
        FieldsetHTMLAttributes<HTMLFieldSetElement>,
        HTMLFieldSetElement
    > {
    direction: string;
}
function Fieldset({ direction, ...rest }: FieldsetProps) {
    const dispatch = useAppDispatch();

    const { filterTo, filterFrom } = useAppSelector(({ process }) => process);

    const handleFieldsetChange = useCallback(
        (evt: FormEvent<HTMLFieldSetElement>) => {
            const targetInput = evt.target as HTMLInputElement;

            if (direction === 'from') {
                dispatch(setFilterFrom(targetInput.value));
            } else {
                dispatch(setFilterTo(targetInput.value));
            }
        },
        []
    );

    return (
        <fieldset
            className="filter__fieldset fieldset"
            id={`${direction}-filter-group`}
            onChange={handleFieldsetChange}
            {...rest}
        >
            {GROUPS[direction].map((group) => (
                <div className="inline" key={group.id}>
                    <input
                        className="fieldset__radio visually-hidden"
                        type="radio"
                        value={group.name}
                        name={`from-filter-input`}
                        id={`filter-${group.id}-from`}
                        readOnly
                        checked={
                            direction === 'from'
                                ? filterFrom === group.name
                                : filterTo === group.name
                        }
                    />
                    <label
                        className="fieldset__label"
                        htmlFor={`filter-${group.id}-from`}
                    >
                        {group.name}
                    </label>
                </div>
            ))}
        </fieldset>
    );
}

export default memo(Fieldset);
