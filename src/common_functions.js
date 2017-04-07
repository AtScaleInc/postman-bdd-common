/* 
Version Beta 0.0.1
*/
function test_response_200_json() {
    describe("valid json", () => {
        it('should return a 200 response', () => {
            response.should.have.status(200);
        });
        it('should return a json response', () => {
            response.should.be.json
        });
    });
};

function test_response_400_json() {
    describe("invalid json", () => {
        it('should return a 400 response', () => {
            response.should.have.status(200);
        });
        it('should return a json response', () => {
            response.should.be.json
        });
    });
}