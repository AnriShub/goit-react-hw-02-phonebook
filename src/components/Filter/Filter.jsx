import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, onChange }) => {
    return <div>
        <label className={css.filterLabel}>Find contacts by name</label>
        <input className={css.filterName}
            type="text"
            name="filter"
            value={filter}
            onChange={onChange}
        />
    </div>
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };