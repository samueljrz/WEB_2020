const styles = require("./styles")
// @ponicode
describe("styles.default", () => {
    test("0", () => {
        let callFunction = () => {
            styles.default({ mixins: { toolbar: "Michael" }, spacing: () => -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            styles.default({ mixins: { toolbar: "Michael" }, spacing: () => 1 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            styles.default({ mixins: { toolbar: "Jean-Philippe" }, spacing: () => -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            styles.default({ mixins: { toolbar: "Jean-Philippe" }, spacing: () => -100 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            styles.default({ mixins: { toolbar: "Pierre Edouard" }, spacing: () => -5.48 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            styles.default({ mixins: {}, spacing: () => NaN })
        }
    
        expect(callFunction).not.toThrow()
    })
})
