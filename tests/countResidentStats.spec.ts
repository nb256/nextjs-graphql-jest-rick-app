import countResidentStats from "../functions/countResidentStats";

const dummyLocation = {
    "id": "1",
    "name": "Earth (C-137)",
    "type": "Planet",
    "dimension": "Dimension C-137",
    "residents": [
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Human",
            "id": "38",
            "name": "Beth Smith",
            "type": "",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/38.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Human",
            "id": "45",
            "name": "Bill",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/45.jpeg"
        },
        {
            "origin": {
                "id": "20",
                "name": "Earth (Replacement Dimension)"
            },
            "status": "Dead",
            "species": "Robot",
            "id": "71",
            "name": "Conroy",
            "type": "",
            "gender": "unknown",
            "image": "https://rickandmortyapi.com/api/character/avatar/71.jpeg"
        },
        {
            "origin": {
                "id": "12",
                "name": "Cronenberg Earth"
            },
            "status": "unknown",
            "species": "Cronenberg",
            "id": "82",
            "name": "Cronenberg Rick",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/82.jpeg"
        },
        {
            "origin": {
                "id": "12",
                "name": "Cronenberg Earth"
            },
            "status": "unknown",
            "species": "Cronenberg",
            "id": "83",
            "name": "Cronenberg Morty",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/83.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Dead",
            "species": "Human",
            "id": "92",
            "name": "Davin",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/92.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Human",
            "id": "112",
            "name": "Eric McMan",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/112.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "unknown",
            "species": "Human",
            "id": "114",
            "name": "Ethan",
            "type": "Cronenberg",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/114.jpeg"
        },
        {
            "origin": {
                "id": null,
                "name": "unknown"
            },
            "status": "Dead",
            "species": "Human",
            "id": "116",
            "name": "Evil Beth Clone",
            "type": "Clone",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/116.jpeg"
        },
        {
            "origin": {
                "id": null,
                "name": "unknown"
            },
            "status": "Dead",
            "species": "Human",
            "id": "117",
            "name": "Evil Jerry Clone",
            "type": "Clone",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/117.jpeg"
        },
        {
            "origin": {
                "id": null,
                "name": "unknown"
            },
            "status": "Dead",
            "species": "Human",
            "id": "120",
            "name": "Evil Summer Clone",
            "type": "Clone",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/120.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Dead",
            "species": "Human",
            "id": "127",
            "name": "Frank Palicky",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/127.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Cronenberg",
            "id": "155",
            "name": "Harold",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/155.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Human",
            "id": "169",
            "name": "Jacob",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/169.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Human",
            "id": "175",
            "name": "Jerry Smith",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/175.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Cronenberg",
            "id": "179",
            "name": "Jessica",
            "type": "",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/179.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Human",
            "id": "186",
            "name": "Joyce Smith",
            "type": "",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/186.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Human",
            "id": "201",
            "name": "Leonard Smith",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/201.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Human",
            "id": "216",
            "name": "MC Haps",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/216.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Cronenberg",
            "id": "239",
            "name": "Mr. Goldenfold",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/239.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Cronenberg",
            "id": "271",
            "name": "Principal Vagina",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/271.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Dead",
            "species": "Human",
            "id": "302",
            "name": "Ruben",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/302.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Human",
            "id": "303",
            "name": "Samantha",
            "type": "",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/303.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Human",
            "id": "338",
            "name": "Summer Smith",
            "type": "",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/338.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Cronenberg",
            "id": "343",
            "name": "Tammy Guetermann",
            "type": "",
            "gender": "Female",
            "image": "https://rickandmortyapi.com/api/character/avatar/343.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Alive",
            "species": "Human",
            "id": "356",
            "name": "Tom Randolph",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/356.jpeg"
        },
        {
            "origin": {
                "id": "1",
                "name": "Earth (C-137)"
            },
            "status": "Dead",
            "species": "Cronenberg",
            "id": "394",
            "name": "Davin",
            "type": "",
            "gender": "Male",
            "image": "https://rickandmortyapi.com/api/character/avatar/394.jpeg"
        }
    ]
};

describe("countResidentStats function tests", function () {
    it("should calculate proper stats", async () => {
        const result = await countResidentStats({ location: dummyLocation });
        expect(result.deadCount).toBe(8)
        expect(result.robotCount).toBe(1)
        expect(result.guestCount).toBe(6)
    });
});

