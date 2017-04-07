/* 
Version Beta 0.0.1
*/
function test_response_code() {
    this.json_200 = function(){
        describe("valid json", () => {
            it('should return a 200 response', () => {
            response.should.have.status(200);
            });
            it('should return a json response', () => {
                response.should.be.json
            });
        });
    };
    this.json_400 = function(){
        describe("invalid json", () => {
            it('should return a 400 response', () => {
            response.should.have.status(200);
            });
            it('should return a json response', () => {
                response.should.be.json
            });
        });
    }; 
}