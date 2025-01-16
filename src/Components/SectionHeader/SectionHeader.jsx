import PropTypes from 'prop-types';
import './SectionHeader.css';

export default function SectionHeader({ title = 'Default Title' }) {
    return (
        <>
            <h2 className="uppercase font-bold text-4xl mb-4">{title}</h2>
            <div className={`relative inline-block leftLine rightLine mb-4 before:bg-current after:bg-current`}>
                <i className='fa-solid fa-star mx-4'></i>
            </div>
        </>
    )
}

SectionHeader.propTypes = { title: PropTypes.string, color: PropTypes.string } // this just tells react that title is a string and if not a string it will throw an error