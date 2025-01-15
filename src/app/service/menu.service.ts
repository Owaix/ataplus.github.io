import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    private menuStateSubject = new BehaviorSubject<boolean>(false);
    menuState$ = this.menuStateSubject.asObservable();

    constructor() { }

    showMenu() {
        this.menuStateSubject.next(true);
    }

    closeMenu() {
        this.menuStateSubject.next(false);
    }

    toggleMenu() {
        const currentState = this.menuStateSubject.getValue();
        this.menuStateSubject.next(!currentState);
    }
}
