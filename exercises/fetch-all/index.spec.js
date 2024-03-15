const fetch = require("./fetch");
const fetchAll = require("./index");
jest.mock("./fetch");

describe("fetchAll", () => {
    
    it("should fetch all resources, in order", () => {
        fetch.mockImplementation(url => {
            const delay = url === "http://url2" ? 100 : 1;
            const response = { 
                status: 200,
                data: `content ${url}`,
            }
            return new Promise(resolve => setTimeout(() => resolve(response), delay));
        });
        
        return fetchAll(["http://url1", "http://url2", "http://url3"])
            .then(result => {
                expect(result).toHaveLength(3);
                expect(result).toEqual(["content http://url1", "content http://url2", "content http://url3"])
            });
    });
    
})