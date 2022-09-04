import { memo } from 'react';

function ExchangeButton() {
    return (
        <div className="exchange-button-container">
            <button className="exchange-button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 477.427 477.427"
                >
                    <polygon
                        points="143.372,419.754 143.372,1.213 113.372,1.213 113.372,420.246 68.732,375.607 47.519,396.82 128.126,477.427
		208.732,396.82 187.519,375.607 	"
                    />
                    <polygon
                        points="429.907,80.606 349.301,0 268.694,80.606 289.907,101.82 334.301,57.426 334.301,476.213 364.301,476.213
		364.301,57.426 408.694,101.82 	"
                    />
                </svg>
            </button>
        </div>
    );
}

export default memo(ExchangeButton);
