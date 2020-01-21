interface IShift {
    start: string;
    end: string;
}

function filterShifts(newShift: IShift) : IShift[] {
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

    let filteredShifts: IShift[];
    // if newShift starts before one of the usershift end
    //  if newShift starts after one of the usershift start
    //      then exclude
    for (let j = 0; j < globalShiftList.length; j++) {
        let isShiftValid = true;
        for (let i = 0; i < usershifts.length; i++) {
            if(isTime1BeforeTime2(newShift.start, usershifts[i].end) && !isTime1BeforeTime2(newShift.start, usershifts[i].start))
            {
                isShiftValid = false;
                break;
            }
        }
        if (isShiftValid) {
            filteredShifts.push(globalShiftList[j]);
        }
    }

    return filteredShifts;
}

function isTime1BeforeTime2(time1: string, time2: string) : boolean {
    let time1Number = parseInt(time1);
    let time2Number = parseInt(time2);

    if (time2Number - time1Number >= 0) {
        return true;
    }

    return false;
}

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