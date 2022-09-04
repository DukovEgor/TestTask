import './app.scss';
import FromPanel from '../from-panel/from-panel';
import ExchangeButton from '../exchange-button/exchange-button';
import store from '../../store';
import { Provider } from 'react-redux';
import ToPanel from '../to-panel/to-panel';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className="container">
                    <h1 className="visually-hidden">Обменник</h1>
                    <FromPanel />
                    <ExchangeButton />
                    <ToPanel />
                </div>
            </div>
        </Provider>
    );
}

export default App;
