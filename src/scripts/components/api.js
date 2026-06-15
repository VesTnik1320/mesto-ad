// src/scripts/components/api.js

const apiConfig = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/apf-cohort-203',
    headers: {
        authorization: '52851f4f-bc52-4dca-86ba-2796340308d9',
        'Content-Type': 'application/json'
    }
};

const getResponseData = (response) => {
    return response.ok
        ? response.json()
        : Promise.reject(`Ошибка: ${response.status}`);
};

export const getUserInfo = () => {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
        headers: apiConfig.headers
    }).then(getResponseData);
};

export const getCardList = () => {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        headers: apiConfig.headers
    }).then(getResponseData);
};

export const setUserInfo = ({ name, about }) => {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: apiConfig.headers,
        body: JSON.stringify({ name, about })
    }).then(getResponseData);
};

export const updateUserAvatar = ({ avatar }) => {
    return fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: apiConfig.headers,
        body: JSON.stringify({ avatar })
    }).then(getResponseData);
};

export const addCard = (cardData) => {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify(cardData)
    }).then(getResponseData);
};

export const deleteCard = (cardId) => {
    return fetch(`${apiConfig.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: apiConfig.headers
    }).then(getResponseData);
};

export const changeLikeCardStatus = (cardId, isLiked) => {
    return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
        method: isLiked ? 'DELETE' : 'PUT',
        headers: apiConfig.headers
    }).then(getResponseData);
};