import logo from './logo.svg';
import './App.css';

function App() {

    const name = "Рафаэль"
    const surname = 'Бикбаев'

    const userCard = 'UserCard'
    const title = 'title'
    const mainInfo = 'mainInfo'

    const forTitle = 'Карточка пользователя'
    const app = 'App'

    return (
    <div className={app}>
      <div className={userCard}>
        <div className={title}>{forTitle}</div>
          <hr/>
          <div className={mainInfo}>
              <p>Имя: {name}</p>
              <p>Фамилия: {surname}</p>
          </div>
      </div>
    </div>
    );
}

export default App;


export const Second = () => {

    const forReverse = 'Строка для реверса'
    const Style = {
        color: 'white',
    }
    let date = new Date().getDate();
    let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']
    // console.log(new Date().getMonth() + new Date().getFullYear())

    let month = new Date().getMonth().toString()
    let year = new Date().getFullYear().toString()

    let day = days[new Date().getDay()]
    let dateStr = date.toString()

    if(date % 2 === 0){
        return (
            <div style={Style}>
                <div className="date">
                    месяц: {month}<br />
                    год: {year}
                </div>
            </div>
        )
    } else {
        return (
            <div style={Style}>
                <div className="date">
                    день недели: {day}<br/>
                    день месяца: {dateStr}
                </div>
            </div>
        )
    }


}