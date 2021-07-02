import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Index from "../pages/index"
import { Location } from "../types"

const dummyProps = {
    locations: [
        {
            "id": "1",
            "name": "Earth (C-137)",
            "type": "Planet",
            "dimension": "Dimension C-137"
        },
        {
            "id": "2",
            "name": "Abadango",
            "type": "Cluster",
            "dimension": "unknown"
        },
        {
            "id": "3",
            "name": "Citadel of Ricks",
            "type": "Space station",
            "dimension": "unknown"
        },],
    pages: 10,
    types: ["type1", "type2"],
    dimensions: ["dimension1", "dimension2", "dimension3",]
}

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe("Home page", () => {
    it("should render some locations", () => {
        const router = { push: jest.fn(), query: { page: 1 } }
        useRouter.mockReturnValue(router)

        const { container } = render(<Index locations={dummyProps.locations as [Location]}
            pages={dummyProps.pages}
            types={dummyProps.types}
            dimensions={dummyProps.dimensions}
        />);
        const locationElements = container.querySelector('[data-testid="location"]')
        expect(locationElements).toBeTruthy()
    });
});