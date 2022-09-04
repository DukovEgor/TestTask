import { useAppDispatch, useAppSelector } from '../../hooks';
import Fieldset from '../filedset/fieldset';
import Select from '../select/select';
import { DIRECTIONS, GROUPS } from '../../data/data';
import { FormEvent, useCallback } from 'react';
import { setSelectFrom } from '../../store/app-process/app-process';

function FromPanel() {
    const dispatch = useAppDispatch();

    const { filterFrom } = useAppSelector(({ process }) => process);

    const aliases = GROUPS.to.find((group) => group.name === filterFrom)?.alias;

    const variants = DIRECTIONS.filter((dir) =>
        aliases?.some((alias) => alias === dir.code)
    );

    const handleSelectChange = useCallback(
        (evt: FormEvent<HTMLSelectElement>) => {
            dispatch(setSelectFrom(evt.currentTarget.value));
        },
        []
    );

    return (
        <div className="from">
            <h2 className="title">Отдаёте</h2>
            <form name="filter" className="filter">
                <Fieldset direction={'from'} />
                <div className="fieldset__container">
                    <input
                        className="fieldset__input"
                        type="number"
                        name="from-input"
                        placeholder="0.23525 - 12.22"
                    />
                    <Select
                        direction={'from'}
                        variants={variants}
                        onChange={handleSelectChange}
                    />
                </div>
            </form>
        </div>
    );
}

export default FromPanel;
