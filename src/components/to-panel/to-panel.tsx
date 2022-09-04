import { useAppSelector } from '../../hooks';
import Fieldset from '../filedset/fieldset';
import Select from '../select/select';
import { FILTER, GROUPS } from '../../data/data';

function ToPanel() {
    const { selectFrom, filterTo } = useAppSelector(({ process }) => process);

    const aliases = GROUPS.to.find((group) => group.name === filterTo)?.alias;
    const variants = FILTER.find(
        (filter) => filter.from.code === selectFrom
    )?.to;
    console.log(variants);

    const filteredVariants =
        filterTo !== 'Все'
            ? variants?.filter((variant) =>
                  aliases?.some((alias) => alias === variant.code)
              )
            : variants;

    return (
        <div className="from">
            <h2 className="title">Получаете</h2>
            <form name="filter" className="filter">
                <Fieldset direction={'to'} />
                <div className="fieldset__container">
                    <input
                        className="fieldset__input"
                        type="number"
                        name="from-input"
                        placeholder="35800 - 27634300.83"
                    />
                    <Select direction={'to'} variants={filteredVariants} />
                </div>
            </form>
        </div>
    );
}

export default ToPanel;
