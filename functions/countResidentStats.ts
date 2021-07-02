import { Location } from "../types"

const countResidentStats = ({ location }: { location: Location }) => {
    let deadCount = 0;
    let aliveCount = 0;
    let guestCount = 0;
    let robotCount = 0;
    let alienCount = 0;
    let humanCount = 0;

    location.residents.forEach(resident => {
        if (resident.status === "Alive") {
            aliveCount++
        } else if (resident.status === "Dead") {
            deadCount++
        }

        if (resident.origin.id !== location.id) {
            guestCount++
        }

        if (resident.species === "Human") {
            humanCount++
        } else if (resident.species === "Robot") {
            robotCount++
        } else if (resident.species === "Alien") {
            alienCount++
        }
    })

    return {
        deadCount,
        aliveCount,
        guestCount,
        robotCount,
        alienCount,
        humanCount
    }

}

export default countResidentStats