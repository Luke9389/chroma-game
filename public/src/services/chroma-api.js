import { requestWithToken } from './request.js';

const URL = '/api';

export function addRound(round) {
    const url = `${URL}/rounds`;
    requestWithToken(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(round)
    });
}