interface IShift {
    start: string;
    end: string;
}

function filterShifts() : IShift[] {
    const usershifts = <IShift[]>[
        {
            start: '0600',
            end: '1000'
        },
        {
            start: '1600',
            end: '2000'
        }
    ];

    const globalShiftList = <IShift[]>[
        {
            start: '0000',
            end: '2359'
        },
        {
            start: '0600',
            end: '1800'
        },
        {
            start: '0000',
            end: '1200'
        },
        {
            start: '0600',
            end: '1200'
        },
        {
            start: '1800',
            end: '2359'
        },
        {
            start: '0000',
            end: '0600'
        },
        {
            start: '1200',
            end: '2359'
        },
        {
            start: '1200',
            end: '1800'
        }
    ];

    let filteredShifts: IShift[] = [];
    for (let j = 0; j < globalShiftList.length; j++) {
        let isShiftValid = true;
        let globalShift = globalShiftList[j];
        for (let i = 0; i < usershifts.length; i++) {
            let usershift = usershifts[i];
            if (
                globalShift.start <= usershift.start && globalShift.end <= usershift.start
                || globalShift.start >= usershift.end
                ) {
                    continue;
                } else {
                    isShiftValid = false;
                    break;
                }

        }
        if (isShiftValid===true) {
            filteredShifts.push(globalShiftList[j]);
        }
    }

    return filteredShifts;
}

console.log(filterShifts());