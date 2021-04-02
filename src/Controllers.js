import React, { useEffect } from 'react';
import { Observable } from 'rxjs';

const Controllers = React.memo((props) => {
    let sec = 0
    let clickTimer = null;
    let btn;
    useEffect(() => btn = document.querySelector("#toggle"));

    const obs$ = new Observable(observer => {
        let interval = setInterval(() => {
            observer.next(++sec)
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    })

    let subscription = null;
    
    const unsubscribe = () => {
        subscription.unsubscribe();
        subscription = null;

        btn.innerHTML = "Start"
    }

    const subscribe = () => {
        subscription = obs$.subscribe({
            next: val => {
                props.handleTime(val);
            }
        });

        btn.innerHTML = "Stop"
    }
    
    const reset = () => {
        if (subscription) {
            sec = 0
        } else if (!subscription && sec !== 0) {
            sec = 0;
            subscribe();
        }
    }

    const wait = () => {
        if (subscription) {
            if (clickTimer === null) {
                clickTimer = setTimeout(() => {
                    clickTimer = null;
                }, 300)
            } else {
                clearTimeout(clickTimer);
                clickTimer = null;

                unsubscribe()
            }
        }
    }

    const toggleWatch = () => {
        if (subscription) {
            unsubscribe()
            sec = 0;
            props.handleTime(sec)
        } else {
            subscribe()
        }
    }

    return (
      <div className="Controllers">
        <button id="toggle" onClick={toggleWatch}>Start</button>
        <button onClick={wait}>Wait</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
}, () => true)

export default Controllers;
