import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import actions from '../../actions';

function* fetchGetTasksList() {

    console.log('HelloSaga fetchGetTasksList');

    try {
        //Делаем запрос на сервер для получения списка тасков
        //const response = (yield call(axios.post, URL_TO_API, val)).data;

        //Получаем от сервера ответ
        const response = {
            newTasks: [
                {
                    id: 123,
                    title: 'Cоздание формы авторизации',
                    description: 'Форма авторизации должна иметь поля: логин, пароль, кнопка сабмит'
                },
                {
                    id: 124,
                    title: 'Cоздание карточки Задачи',
                    description: 'Карточка должна иметь поля: название, описание задачи.....'
                }
            ],
            inprocessTasks: [],
            doneTasks: []
        };

        yield put( actions.setTasksList(response) );
    } catch (e) {
        console.log(e);
        //yield put({type: "USER_FETCH_FAILED", message: e.message});
    };
};

export default fetchGetTasksList;