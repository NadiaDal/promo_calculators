/**
 * Created by nadiadaliavska on 7/1/17.
 */
export const PLUS_PAGE = 'PLUS_PAGE';
export const MINUS_PAGE = 'MINUS_PAGE';
export const CHANGE_SERVICE = 'CHANGE_SERVICE';
export const CHANGE_LEVEL = 'CHANGE_LEVEL';
export const CHANGE_DEADLINE = 'CHANGE_DEADLINE';
export const FETCH_INIT_TREE = 'FETCH_INIT_TREE';
export const FETCH_SERVICE = 'FETCH_SERVICE';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export function plusPage() {
    return {type: PLUS_PAGE}
}

export function minusPage() {

    return {type: MINUS_PAGE}
}

export function changeService(id) {
    return {type: CHANGE_SERVICE, id: id}
}
export function changeLevel(id) {
    return {type: CHANGE_LEVEL, id: id}
}
export function changeDeadline(id) {
    return {type: CHANGE_DEADLINE, id: id}
}
export function fetchInitTree() {
    return {type: FETCH_INIT_TREE}
}
export function fetchServiceAction(serviceId) {
    return {type: FETCH_SERVICE, id: serviceId}
}
export function fetchSuccess(tree) {
    return {type: FETCH_SUCCESS, tree: tree}
}

