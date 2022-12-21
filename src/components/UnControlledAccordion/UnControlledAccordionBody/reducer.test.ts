import {ActionType, reducer, StateType} from "../Reducer";

test('reducer should change value to opposite', () => {

    // data

    const startState: StateType = {collapsed: false};

    // action

    const endState = reducer(startState, {type: 'TOGGLE-COLLAPSED'} as ActionType);

    // expection

    expect(endState.collapsed).toBeTruthy();

});

test('reducer should change value to false', () => {

    // data

    const startState: StateType = {collapsed: true};

    // action

    const endState = reducer(startState, {type: 'TOGGLE-COLLAPSED'} as ActionType);

    // expection

    expect(endState.collapsed).toBeFalsy();

});

test('reducer should throw error action type is incorrect', () => {

    // data

    const startState: StateType = {collapsed: true};

    // action

    /*    const endState = reducer(startState, {type: 'TOGGLE-COLLAPSED'});*/

    // expection

    expect(() => {
        reducer(startState, {type: 'FAKE-TYPE'})
    }).toThrowError();

});