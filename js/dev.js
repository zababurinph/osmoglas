var arr = [
    [
        [71, 71, 67, 69, 71, 72, 71, 69, 67, 69, 71, 71, 72, 71, 71, 69, 71,   69, 69, 66, 67, 69, 71, 69, 67, 66, 67, 69, 69, 69,     69, 69, 69,     71, 72, 72, 71, 71, 69, 69, 71,    71, 71, 69, 71, 72, 72, 72, 71, 72, 72, 71, 71, 69, 69, 71,   71, 71, 67, 69, 71, 72, 71, 69, 67, 69, 71, 71, 72, 71, 69, 71,     69, 69, 66, 67, 69, 71, 69, 67, 66, 67, 69, 69, 69,     69, 69,   71, 71, 72, 72, 71, 71, 71, 69, 69, 71,      71, 71, 71, 71, 71, 69, 71, 72, 72, 72, 71, 71, 72, 72, 71, 71, 71, 69, 69, 71,    71, 67, 69, 71, 72, 71, 71, 69, 67, 69, 71, 71, 72, 71, 71, 69, 69, 71,    69, 66, 67, 69, 71, 69, 69, 67, 66, 67, 69, 69, 69, 69, 69, 69, 69, 69,   71, 71, 72, 71, 71, 69, 69, 71,    71, 71, 71, 69, 71, 72, 72, 72, 71, 71, 72, 71, 71, 69, 69, 71,    71, 71,    71, 71, 67, 69, 71, 72, 71, 69, 67, 69, 71, 71, 72, 71, 69, 71,   69, 66, 67, 69, 71, 69, 67, 66, 67, 69, 69, 69, 69, 69, 69, 69,     71, 72, 72, 71, 71, 69, 71,   71, 71, 71, 71, 69, 71, 72, 72, 71, 72, 71, 71, 69, 71],
        [67, 67, 67, 67, 67, 67, 67, 66, 64, 66, 67, 67, 66, 67, 67, 66, 67,    66, 66, 62, 64, 66, 67, 66, 64, 62, 64, 66, 66, 67, 66, 66, 64, 66,     67, 66, 66, 67, 67, 66, 66, 67,    68, 67, 64, 67, 67, 67, 67, 67, 66, 66, 67, 67, 66, 66, 67,    67, 67, 67, 67, 67, 67, 67, 66, 64, 66, 67, 67, 66, 67, 66, 67,    66, 66, 62, 64, 66, 67, 66, 64, 62, 64, 66, 66, 67, 66, 64, 66,    67, 67, 66, 66, 67, 67, 67, 66, 66, 67,    68, 67, 67, 67, 67, 64, 67, 67, 67, 67, 67, 67, 66, 66, 67, 67, 67, 66, 66, 67,    67, 67, 67, 67, 67, 67, 67, 66, 64, 66, 67, 67, 66, 67, 67, 66, 66, 67,    66, 62, 64, 66, 67, 66, 66, 64, 62, 64, 66, 66, 67, 66, 66, 64, 64, 66,    67, 67, 66, 67, 67, 66, 66, 67,     68, 67, 67, 64, 67, 67, 67, 67, 67, 67, 66, 67, 67, 66, 66, 67,     67, 67,    67, 67, 67, 67, 67, 67, 67, 66, 64, 66, 67, 67, 66, 67, 66, 67,       66, 62, 64, 66, 67, 66, 64, 62, 64, 66, 66, 66, 67, 66, 64, 64, 66,     67, 66, 66, 67, 67, 66, 67,        68, 67, 67, 67, 64, 67, 67, 67,  67, 66, 67, 67, 66, 67]
    ],
    [
        [1, 1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 2, 1, 1, 4, 3,    1, 1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 3,    1, 4, 3,     2, 1, 1, 1, 1, 3, 1, 3,     4, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 3, 1, 4,       1, 1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 4, 3,      1, 1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 4,    4, 3,    1, 1, 1, 1, 1, 0.5, 0.5, 3, 1, 3,    1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 3, 1, 4,     2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 3,     2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 3,    1, 1, 2, 1, 1, 3, 1, 3,    2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4,    2, 4,    1, 1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 4, 3,    2, 1, 1, 2, 2, 3, 1, 1, 1, 1, 0.5, 0.5, 4, 3, 1, 3,    2, 1, 1, 1, 1, 4, 3,    1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 4, 4],
        [1, 1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 2, 1, 1, 4, 3,    1, 1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 2, 1, 1, 4, 3,     2, 1, 1, 1, 1, 3, 1, 3,     4, 2, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 3, 1, 4,        1, 1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 4, 3,     1, 1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 4, 3,    1, 1, 1, 1, 1, 0.5, 0.5, 3, 1, 3,    1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 3, 1, 4,     2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 3,     2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 3,    2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 3, 1, 3,    1, 1, 2, 1, 1, 3, 1, 3,     2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 3, 1, 4,     2, 4,     1, 1, 1, 1, 2, 2, 3, 1, 1, 1, 1, 1, 2, 2, 4, 3,    2, 1, 1, 2, 2, 3, 1, 1, 1, 1, 0.5, 0.5, 4, 3, 1, 3,     2, 1, 1, 1, 1, 4, 3,   1, 1, 2, 2, 1, 1, 2, 2, 2, 2, 1, 1, 4, 4]
    ]
]

var jsonFrom = {
    "header": {
        "keySignatures": [],
        "meta": [],
        "name": "",
        "ppq": 128,
        "tempos": [
            {
                "bpm": 80,
                "ticks": 0
            },
            {
                "bpm": 80,
                "ticks": 0
            },
            {
                "bpm": 80,
                "ticks": 0
            },
            {
                "bpm": 80,
                "ticks": 0
            }
        ],
        "timeSignatures": [
            {
                "ticks": 0,
                "timeSignature": [
                    4,
                    4
                ],
                "measures": 0
            }
        ]
    },
    "tracks": [
        {
            "channel": 0,
            "controlChanges": {
                "7": [
                    {
                        "number": 7,
                        "ticks": 0,
                        "time": 0,
                        "value": 0.7086614173228346
                    }
                ],
                "10": [
                    {
                        "number": 10,
                        "ticks": 0,
                        "time": 0,
                        "value": 0.5039370078740157
                    }
                ]
            },
            "pitchBends": [],
            "instrument": {
                "family": "piano",
                "number": 0,
                "name": "acoustic grand piano"
            },
            "name": "soprano1",
            "notes": [
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 0,
                    "time": 0,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 128,
                    "time": 0.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 256,
                    "time": 1.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 384,
                    "time": 2.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 512,
                    "time": 3,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 768,
                    "time": 4.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 1024,
                    "time": 6,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 1408,
                    "time": 8.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 1536,
                    "time": 9,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 1664,
                    "time": 9.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 1792,
                    "time": 10.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 1920,
                    "time": 11.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 2048,
                    "time": 12,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 2304,
                    "time": 13.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 2432,
                    "time": 14.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 2560,
                    "time": 15,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 3072,
                    "time": 18,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 3584,
                    "time": 21,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 3712,
                    "time": 21.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 3840,
                    "time": 22.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 3968,
                    "time": 23.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 4096,
                    "time": 24,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 4352,
                    "time": 25.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 4608,
                    "time": 27,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 4992,
                    "time": 29.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 5120,
                    "time": 30,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 5248,
                    "time": 30.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 5376,
                    "time": 31.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 5504,
                    "time": 32.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 5632,
                    "time": 33,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 6016,
                    "time": 35.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 6144,
                    "time": 36,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 6656,
                    "time": 39,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 7168,
                    "time": 42,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 7424,
                    "time": 43.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 7552,
                    "time": 44.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 7680,
                    "time": 45,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 7808,
                    "time": 45.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 7936,
                    "time": 46.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 8320,
                    "time": 48.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 8448,
                    "time": 49.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 9216,
                    "time": 54,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 9728,
                    "time": 57,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 9984,
                    "time": 58.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 10112,
                    "time": 59.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 10240,
                    "time": 60,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 10496,
                    "time": 61.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 10624,
                    "time": 62.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 10752,
                    "time": 63,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 11008,
                    "time": 64.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 11136,
                    "time": 65.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 11264,
                    "time": 66,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 11392,
                    "time": 66.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 11520,
                    "time": 67.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 11904,
                    "time": 69.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 12032,
                    "time": 70.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 12800,
                    "time": 75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 12928,
                    "time": 75.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 13056,
                    "time": 76.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 13184,
                    "time": 77.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 13312,
                    "time": 78,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 13568,
                    "time": 79.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 13824,
                    "time": 81,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 14208,
                    "time": 83.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 14336,
                    "time": 84,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 14464,
                    "time": 84.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 14592,
                    "time": 85.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 14720,
                    "time": 86.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 14848,
                    "time": 87,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 15104,
                    "time": 88.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 15360,
                    "time": 90,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 15872,
                    "time": 93,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 16384,
                    "time": 96,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 16512,
                    "time": 96.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 16640,
                    "time": 97.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 16768,
                    "time": 98.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 16896,
                    "time": 99,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 17152,
                    "time": 100.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 17408,
                    "time": 102,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 17792,
                    "time": 104.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 17920,
                    "time": 105,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 18048,
                    "time": 105.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 18176,
                    "time": 106.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 18304,
                    "time": 107.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 18432,
                    "time": 108,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 18944,
                    "time": 111,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 19456,
                    "time": 114,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 20224,
                    "time": 118.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 20352,
                    "time": 119.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 20480,
                    "time": 120,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 20608,
                    "time": 120.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 20736,
                    "time": 121.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.375,
                    "durationTicks": 64,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 20864,
                    "time": 122.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.375,
                    "durationTicks": 64,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 20928,
                    "time": 122.625,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 20992,
                    "time": 123,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 21376,
                    "time": 125.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 21504,
                    "time": 126,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 22272,
                    "time": 130.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 22400,
                    "time": 131.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 22528,
                    "time": 132,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 22784,
                    "time": 133.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 22912,
                    "time": 134.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 23040,
                    "time": 135,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 23168,
                    "time": 135.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 23296,
                    "time": 136.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 23552,
                    "time": 138,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 23680,
                    "time": 138.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 23808,
                    "time": 139.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 23936,
                    "time": 140.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 24064,
                    "time": 141,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 24192,
                    "time": 141.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 24320,
                    "time": 142.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.375,
                    "durationTicks": 64,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 24448,
                    "time": 143.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.375,
                    "durationTicks": 64,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 24512,
                    "time": 143.625,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 24576,
                    "time": 144,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 24960,
                    "time": 146.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 25088,
                    "time": 147,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 25600,
                    "time": 150,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 25856,
                    "time": 151.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 25984,
                    "time": 152.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 26112,
                    "time": 153,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 26368,
                    "time": 154.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 26624,
                    "time": 156,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 26880,
                    "time": 157.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 27008,
                    "time": 158.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 27136,
                    "time": 159,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 27264,
                    "time": 159.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 27392,
                    "time": 160.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 27520,
                    "time": 161.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 27648,
                    "time": 162,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 27904,
                    "time": 163.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 28032,
                    "time": 164.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 28160,
                    "time": 165,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 28544,
                    "time": 167.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 28672,
                    "time": 168,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 29184,
                    "time": 171,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 29440,
                    "time": 172.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 29568,
                    "time": 173.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 29696,
                    "time": 174,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 29952,
                    "time": 175.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 30208,
                    "time": 177,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 30464,
                    "time": 178.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 30592,
                    "time": 179.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 30720,
                    "time": 180,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 30848,
                    "time": 180.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 30976,
                    "time": 181.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 31104,
                    "time": 182.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 31232,
                    "time": 183,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 31488,
                    "time": 184.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 31616,
                    "time": 185.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 31744,
                    "time": 186,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 32128,
                    "time": 188.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 32256,
                    "time": 189,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 32640,
                    "time": 191.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 32768,
                    "time": 192,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 32896,
                    "time": 192.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 33152,
                    "time": 194.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 33280,
                    "time": 195,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 33408,
                    "time": 195.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 33792,
                    "time": 198,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 33920,
                    "time": 198.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 34560,
                    "time": 202.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 34816,
                    "time": 204,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 35072,
                    "time": 205.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 35328,
                    "time": 207,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 35456,
                    "time": 207.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 35584,
                    "time": 208.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 35840,
                    "time": 210,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 35968,
                    "time": 210.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 36096,
                    "time": 211.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 36224,
                    "time": 212.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 36352,
                    "time": 213,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 36608,
                    "time": 214.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 36736,
                    "time": 215.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 36864,
                    "time": 216,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 37248,
                    "time": 218.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 37376,
                    "time": 219,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 38144,
                    "time": 223.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 38400,
                    "time": 225,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 38912,
                    "time": 228,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 39040,
                    "time": 228.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 39168,
                    "time": 229.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 39296,
                    "time": 230.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 39424,
                    "time": 231,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 39680,
                    "time": 232.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 39936,
                    "time": 234,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 40320,
                    "time": 236.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 40448,
                    "time": 237,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 40576,
                    "time": 237.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 40704,
                    "time": 238.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 40832,
                    "time": 239.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 40960,
                    "time": 240,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 41216,
                    "time": 241.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 41472,
                    "time": 243,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 41984,
                    "time": 246,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 42496,
                    "time": 249,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 42752,
                    "time": 250.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 42880,
                    "time": 251.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 43008,
                    "time": 252,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 43264,
                    "time": 253.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 43520,
                    "time": 255,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 43904,
                    "time": 257.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 44032,
                    "time": 258,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 44160,
                    "time": 258.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 44288,
                    "time": 259.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.375,
                    "durationTicks": 64,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 44416,
                    "time": 260.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.375,
                    "durationTicks": 64,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 44480,
                    "time": 260.625,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 44544,
                    "time": 261,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 45056,
                    "time": 264,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 45440,
                    "time": 266.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 45568,
                    "time": 267,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 46336,
                    "time": 271.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 46592,
                    "time": 273,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 46720,
                    "time": 273.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 46848,
                    "time": 274.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 46976,
                    "time": 275.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 47104,
                    "time": 276,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 47616,
                    "time": 279,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 48384,
                    "time": 283.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 48512,
                    "time": 284.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 48640,
                    "time": 285,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 48896,
                    "time": 286.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 49152,
                    "time": 288,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 49280,
                    "time": 288.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 49408,
                    "time": 289.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 49664,
                    "time": 291,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 49920,
                    "time": 292.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 72,
                    "name": "C5",
                    "ticks": 50176,
                    "time": 294,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 50432,
                    "time": 295.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 50560,
                    "time": 296.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 69,
                    "name": "A4",
                    "ticks": 50688,
                    "time": 297,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 71,
                    "name": "B4",
                    "ticks": 51200,
                    "time": 300,
                    "velocity": 0.7086614173228346
                }
            ],
            "endOfTrackTicks": 51712
        },
        {
            "channel": 0,
            "controlChanges": {
                "7": [
                    {
                        "number": 7,
                        "ticks": 0,
                        "time": 0,
                        "value": 0.7086614173228346
                    }
                ],
                "10": [
                    {
                        "number": 10,
                        "ticks": 0,
                        "time": 0,
                        "value": 0.5039370078740157
                    }
                ]
            },
            "pitchBends": [],
            "instrument": {
                "family": "piano",
                "number": 0,
                "name": "acoustic grand piano"
            },
            "name": "alt",
            "notes": [
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 0,
                    "time": 0,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 128,
                    "time": 0.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 256,
                    "time": 1.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 384,
                    "time": 2.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 512,
                    "time": 3,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 768,
                    "time": 4.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 1024,
                    "time": 6,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 1408,
                    "time": 8.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 1536,
                    "time": 9,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 1664,
                    "time": 9.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 1792,
                    "time": 10.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 1920,
                    "time": 11.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 2048,
                    "time": 12,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 2304,
                    "time": 13.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 2432,
                    "time": 14.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 2560,
                    "time": 15,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 3072,
                    "time": 18,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 3584,
                    "time": 21,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 3712,
                    "time": 21.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 3840,
                    "time": 22.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 3968,
                    "time": 23.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 4096,
                    "time": 24,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 4352,
                    "time": 25.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 4608,
                    "time": 27,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 4992,
                    "time": 29.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 5120,
                    "time": 30,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 5248,
                    "time": 30.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 5376,
                    "time": 31.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 5504,
                    "time": 32.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 5632,
                    "time": 33,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 5888,
                    "time": 34.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 6016,
                    "time": 35.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 6144,
                    "time": 36,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 6656,
                    "time": 39,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 7168,
                    "time": 42,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 7424,
                    "time": 43.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 7552,
                    "time": 44.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 7680,
                    "time": 45,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 7808,
                    "time": 45.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 7936,
                    "time": 46.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 8320,
                    "time": 48.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 8448,
                    "time": 49.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 9216,
                    "time": 54,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 9728,
                    "time": 57,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 9984,
                    "time": 58.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 10112,
                    "time": 59.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 10240,
                    "time": 60,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 10496,
                    "time": 61.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 10624,
                    "time": 62.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 10752,
                    "time": 63,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 11008,
                    "time": 64.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 11136,
                    "time": 65.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 11264,
                    "time": 66,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 11392,
                    "time": 66.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 11520,
                    "time": 67.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 11904,
                    "time": 69.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 12032,
                    "time": 70.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 12800,
                    "time": 75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 12928,
                    "time": 75.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 13056,
                    "time": 76.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 13184,
                    "time": 77.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 13312,
                    "time": 78,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 13568,
                    "time": 79.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 13824,
                    "time": 81,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 14208,
                    "time": 83.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 14336,
                    "time": 84,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 14464,
                    "time": 84.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 14592,
                    "time": 85.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 14720,
                    "time": 86.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 14848,
                    "time": 87,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 15104,
                    "time": 88.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 15360,
                    "time": 90,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 15872,
                    "time": 93,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 16384,
                    "time": 96,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 16512,
                    "time": 96.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 16640,
                    "time": 97.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 16768,
                    "time": 98.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 16896,
                    "time": 99,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 17152,
                    "time": 100.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 17408,
                    "time": 102,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 17792,
                    "time": 104.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 17920,
                    "time": 105,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 18048,
                    "time": 105.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 18176,
                    "time": 106.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 18304,
                    "time": 107.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 18432,
                    "time": 108,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 18688,
                    "time": 109.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 18944,
                    "time": 111,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 19456,
                    "time": 114,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 20224,
                    "time": 118.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 20352,
                    "time": 119.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 20480,
                    "time": 120,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 20608,
                    "time": 120.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 20736,
                    "time": 121.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.375,
                    "durationTicks": 64,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 20864,
                    "time": 122.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.375,
                    "durationTicks": 64,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 20928,
                    "time": 122.625,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 20992,
                    "time": 123,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 21376,
                    "time": 125.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 21504,
                    "time": 126,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 22272,
                    "time": 130.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 22400,
                    "time": 131.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 22528,
                    "time": 132,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 22784,
                    "time": 133.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 22912,
                    "time": 134.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 23040,
                    "time": 135,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 23168,
                    "time": 135.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 23296,
                    "time": 136.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 23552,
                    "time": 138,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 23680,
                    "time": 138.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 23808,
                    "time": 139.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 23936,
                    "time": 140.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 24064,
                    "time": 141,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 24192,
                    "time": 141.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 24320,
                    "time": 142.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.375,
                    "durationTicks": 64,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 24448,
                    "time": 143.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.375,
                    "durationTicks": 64,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 24512,
                    "time": 143.625,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 24576,
                    "time": 144,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 24960,
                    "time": 146.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 25088,
                    "time": 147,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 25600,
                    "time": 150,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 25856,
                    "time": 151.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 25984,
                    "time": 152.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 26112,
                    "time": 153,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 26368,
                    "time": 154.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 26624,
                    "time": 156,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 26880,
                    "time": 157.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 27008,
                    "time": 158.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 27136,
                    "time": 159,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 27264,
                    "time": 159.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 27392,
                    "time": 160.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 27520,
                    "time": 161.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 27648,
                    "time": 162,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 27904,
                    "time": 163.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 28032,
                    "time": 164.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 28160,
                    "time": 165,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 28544,
                    "time": 167.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 28672,
                    "time": 168,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 29184,
                    "time": 171,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 29440,
                    "time": 172.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 29568,
                    "time": 173.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 29696,
                    "time": 174,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 29952,
                    "time": 175.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 30208,
                    "time": 177,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 30464,
                    "time": 178.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 30592,
                    "time": 179.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 30720,
                    "time": 180,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 30848,
                    "time": 180.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 30976,
                    "time": 181.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 31104,
                    "time": 182.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 31232,
                    "time": 183,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 31488,
                    "time": 184.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 31616,
                    "time": 185.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 31744,
                    "time": 186,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 32128,
                    "time": 188.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 32256,
                    "time": 189,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 32640,
                    "time": 191.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 32768,
                    "time": 192,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 32896,
                    "time": 192.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 33152,
                    "time": 194.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 33280,
                    "time": 195,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 33408,
                    "time": 195.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 33792,
                    "time": 198,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 33920,
                    "time": 198.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 34560,
                    "time": 202.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 34816,
                    "time": 204,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 35072,
                    "time": 205.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 35328,
                    "time": 207,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 35456,
                    "time": 207.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 35584,
                    "time": 208.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 35840,
                    "time": 210,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 35968,
                    "time": 210.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 36096,
                    "time": 211.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 36224,
                    "time": 212.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 36352,
                    "time": 213,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 36608,
                    "time": 214.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 36736,
                    "time": 215.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 36864,
                    "time": 216,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 37248,
                    "time": 218.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 37376,
                    "time": 219,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 38144,
                    "time": 223.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 38400,
                    "time": 225,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 38912,
                    "time": 228,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 39040,
                    "time": 228.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 39168,
                    "time": 229.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 39296,
                    "time": 230.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 39424,
                    "time": 231,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 39680,
                    "time": 232.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 39936,
                    "time": 234,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 40320,
                    "time": 236.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 40448,
                    "time": 237,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 40576,
                    "time": 237.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 40704,
                    "time": 238.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 40832,
                    "time": 239.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 40960,
                    "time": 240,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 41216,
                    "time": 241.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 41472,
                    "time": 243,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 41984,
                    "time": 246,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 42496,
                    "time": 249,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 42752,
                    "time": 250.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 42880,
                    "time": 251.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 43008,
                    "time": 252,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 43264,
                    "time": 253.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 43520,
                    "time": 255,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 43904,
                    "time": 257.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 44032,
                    "time": 258,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 44160,
                    "time": 258.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 44288,
                    "time": 259.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.375,
                    "durationTicks": 64,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 44416,
                    "time": 260.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.375,
                    "durationTicks": 64,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 44480,
                    "time": 260.625,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 44544,
                    "time": 261,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 44800,
                    "time": 262.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 45056,
                    "time": 264,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 45440,
                    "time": 266.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 45568,
                    "time": 267,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 46336,
                    "time": 271.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 46592,
                    "time": 273,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 46720,
                    "time": 273.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 46848,
                    "time": 274.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 46976,
                    "time": 275.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 47104,
                    "time": 276,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 47616,
                    "time": 279,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 48384,
                    "time": 283.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 48512,
                    "time": 284.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 48640,
                    "time": 285,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 48896,
                    "time": 286.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 49152,
                    "time": 288,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 49280,
                    "time": 288.75,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 49408,
                    "time": 289.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 49664,
                    "time": 291,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 49920,
                    "time": 292.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 50176,
                    "time": 294,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 50432,
                    "time": 295.5,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 50560,
                    "time": 296.25,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 66,
                    "name": "F#4",
                    "ticks": 50688,
                    "time": 297,
                    "velocity": 0.7086614173228346
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 67,
                    "name": "G4",
                    "ticks": 51200,
                    "time": 300,
                    "velocity": 0.7086614173228346
                }
            ],
            "endOfTrackTicks": 51712
        },
        {
            "channel": 0,
            "controlChanges": {
                "7": [
                    {
                        "number": 7,
                        "ticks": 0,
                        "time": 0,
                        "value": 0.7086614173228346
                    }
                ],
                "10": [
                    {
                        "number": 10,
                        "ticks": 0,
                        "time": 0,
                        "value": 0.5039370078740157
                    }
                ]
            },
            "pitchBends": [],
            "instrument": {
                "family": "piano",
                "number": 0,
                "name": "acoustic grand piano"
            },
            "name": "tenor1",
            "notes": [
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 0,
                    "time": 0,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 128,
                    "time": 0.75,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 59,
                    "name": "B3",
                    "ticks": 256,
                    "time": 1.5,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 60,
                    "name": "C4",
                    "ticks": 384,
                    "time": 2.25,
                    "velocity": 1
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 512,
                    "time": 3,
                    "velocity": 1
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 64,
                    "name": "E4",
                    "ticks": 768,
                    "time": 4.5,
                    "velocity": 1
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 1024,
                    "time": 6,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 59,
                    "name": "B3",
                    "ticks": 1536,
                    "time": 9,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 1664,
                    "time": 9.75,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 1792,
                    "time": 10.5,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 1920,
                    "time": 11.25,
                    "velocity": 1
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 2048,
                    "time": 12,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 2432,
                    "time": 14.25,
                    "velocity": 1
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 2560,
                    "time": 15,
                    "velocity": 1
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 62,
                    "name": "D4",
                    "ticks": 3072,
                    "time": 18,
                    "velocity": 1
                }
            ],
            "endOfTrackTicks": 3456
        },
        {
            "channel": 0,
            "controlChanges": {
                "7": [
                    {
                        "number": 7,
                        "ticks": 0,
                        "time": 0,
                        "value": 0.7086614173228346
                    }
                ],
                "10": [
                    {
                        "number": 10,
                        "ticks": 0,
                        "time": 0,
                        "value": 0.5039370078740157
                    }
                ]
            },
            "pitchBends": [],
            "instrument": {
                "family": "piano",
                "number": 0,
                "name": "acoustic grand piano"
            },
            "name": "bas",
            "notes": [
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 55,
                    "name": "G3",
                    "ticks": 0,
                    "time": 0,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 55,
                    "name": "G3",
                    "ticks": 128,
                    "time": 0.75,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 55,
                    "name": "G3",
                    "ticks": 256,
                    "time": 1.5,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 55,
                    "name": "G3",
                    "ticks": 384,
                    "time": 2.25,
                    "velocity": 1
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 55,
                    "name": "G3",
                    "ticks": 512,
                    "time": 3,
                    "velocity": 1
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 48,
                    "name": "C3",
                    "ticks": 768,
                    "time": 4.5,
                    "velocity": 1
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 55,
                    "name": "G3",
                    "ticks": 1024,
                    "time": 6,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 50,
                    "name": "D3",
                    "ticks": 1408,
                    "time": 8.25,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 52,
                    "name": "E3",
                    "ticks": 1536,
                    "time": 9,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 50,
                    "name": "D3",
                    "ticks": 1664,
                    "time": 9.75,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 55,
                    "name": "G3",
                    "ticks": 1792,
                    "time": 10.5,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 55,
                    "name": "G3",
                    "ticks": 1920,
                    "time": 11.25,
                    "velocity": 1
                },
                {
                    "duration": 1.5,
                    "durationTicks": 256,
                    "midi": 57,
                    "name": "A3",
                    "ticks": 2048,
                    "time": 12,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 55,
                    "name": "G3",
                    "ticks": 2304,
                    "time": 13.5,
                    "velocity": 1
                },
                {
                    "duration": 0.75,
                    "durationTicks": 128,
                    "midi": 55,
                    "name": "G3",
                    "ticks": 2432,
                    "time": 14.25,
                    "velocity": 1
                },
                {
                    "duration": 3,
                    "durationTicks": 512,
                    "midi": 50,
                    "name": "D3",
                    "ticks": 2560,
                    "time": 15,
                    "velocity": 1
                },
                {
                    "duration": 2.25,
                    "durationTicks": 384,
                    "midi": 55,
                    "name": "G3",
                    "ticks": 3072,
                    "time": 18,
                    "velocity": 1
                }
            ],
            "endOfTrackTicks": 3456
        }
    ]
}

function generateMidiFromArray(arrNotes, arrTemps) {
    var tracks = [],
        ticks = 128,
        vel = 90,
        bpm = 120;
    var file = new MidiLocal.File({ticks: ticks});

    arrTemps = arrTemps.map(g => g.map(t => t *= ticks));

    arrNotes.map(t => tracks.push(new MidiLocal.Track()));
    arrNotes.map((t, j) => tracks[j].setTempo(bpm, 0));

    arrNotes[0].map((note, i) => {
        arrNotes.map((t, j) => {
            tracks[j].addNote(0, arrNotes[j][i], arrTemps[j][i], 0, vel)
        })
    })

    tracks.map(t => file.addTrack(t));
    return "data:audio/midi;base64," + btoa(file.toBytes());
}

function jsonToMidi2(json) {
    var ppq = 128,
        bpm = 120;
    var file = new MidiLocal.File({ticks: ppq}),
        tracks = [],
        time = 0,
        oldTicks = 0;

    json.tracks.map(t => tracks.push(new MidiLocal.Track()));
    tracks[0].setTimeSignature(json.header.timeSignatures[0].timeSignature[0], json.header.timeSignatures[0].timeSignature[1], 0);

    json.tracks.map((t, i) => {
        tracks[i].setTempo(bpm, 0);
        oldTicks = 0;
        t.notes.map(note => {
            if (note.ticks !== oldTicks) time = 256; //(note.ticks - oldTicks) / 220 * ppq / 3 * 4;
            tracks[i].addNote(0, note.midi, note.duration * ppq / 3 * 4, time, 90);
            oldTicks = note.ticks + note.durationTicks;
            time = 0;
        });
    })

    tracks.map(t => file.addTrack(t));
    return "data:audio/midi;base64," + btoa(file.toBytes());
}