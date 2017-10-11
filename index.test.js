import Index from './index'
import Map from './map'

describe('Lectures', () => {
	test('Should first lecture be "Scratch React Fiber"', () => {
		const {
			talks
		} = Index;
		expect(talks[0].name).toBe('Scratch React Fiber')
	})
	test("Shuld map pass", () => {
		expect(typeof Map).expect('function')
	})

})
