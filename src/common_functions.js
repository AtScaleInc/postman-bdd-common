function test_response_200_json() {
    describe("valid json", () => {
        it('should return a 200 response', () => {
            response.should.have.status(200);
        });
        it('should return a json response', () => {
            response.should.be.json;
        });
        it('should not have an error', () => {
            expect(response.body.response, "Error Message: " 
                + response.body.response.error + "\nStack Trace: " 
                + response.body.response.stack + "\n").to.not.have.property('error'); 
        });
    });
}

function test_response_200_text() {
    describe("valid json", () => {
        it('should return a 200 response', () => {
            response.should.have.status(200);
        });
        it('should return a text response', () => {
            response.should.be.text;
        });
    });
}

function test_response_200_javascript() {
    describe("valid json", () => {
        it('should return a 200 response', () => {
            response.should.have.status(200);
        });
        it('should return a javascript response', () => {
            response.should.have.header('content-type', 'application/javascript;charset=utf-8');
        });
    });
}

function test_response_400_json(errorMessage) {
    describe("invalid json", () => {
        it('should return a 400 response', () => {
            response.should.have.status(400);
        });
        it('should return a json response', () => {
            response.should.be.json;
        });
        if (errorMessage !== null && errorMessage !== undefined) {
            it('should have error message ' + errorMessage, () => {
                expect(response.body.response, "Stack Trace: " + response.body.response.stack + "\n").to.have.property('error')
                .that.deep.equal(errorMessage);
            });
        }
    });
}

function test_response_401_json(errorMessage) {
    describe("invalid json", () => {
        it('should return a 401 response', () => {
            response.should.have.status(401);
        });
        it('should return a json response', () => {
            response.should.be.json;
        });
        if (errorMessage !== null && errorMessage !== undefined) {
            it('should have error message ' + errorMessage, () => {
                expect(response.body.response, "Stack Trace: " + response.body.response.stack + "\n").to.have.property('error')
                .that.deep.equal(errorMessage);
            });
        }
    });
}

function test_response_403_json(errorMessage) {
    describe("invalid json", () => {
        it('should return a 403 response', () => {
            response.should.have.status(400);
        });
        it('should return a json response', () => {
            response.should.be.json;
        });
        if (errorMessage !== null && errorMessage !== undefined) {
            it('should have error message ' + errorMessage, () => {
                expect(response.body.response, "Stack Trace: " + response.body.response.stack + "\n").to.have.property('error')
                .that.deep.equal(errorMessage);
            });
        }
    });
}

function test_response_404_json(errorMessage) {
    describe("invalid json", () => {
        it('should return a 404 response', () => {
            response.should.have.status(400);
        });
        it('should return a json response', () => {
            response.should.be.json;
        });
        if (errorMessage !== null && errorMessage !== undefined) {
            it('should have error message ' + errorMessage, () => {
                expect(response.body.response, "Stack Trace: " + response.body.response.stack + "\n").to.have.property('error')
                .that.deep.equal(errorMessage);
            });
        }
    });
}

function test_response_500_json(errorMessage) {
    describe("invalid json", () => {
        it('should return a 500 response', () => {
            response.should.have.status(500);
        });
        it('should return a json response', () => {
            response.should.be.json;
        });
        if (errorMessage !== null && errorMessage !== undefined) {
            it('should have error message ' + errorMessage, () => {
                expect(response.body.response, "Stack Trace: " + response.body.response.stack + "\n").to.have.property('error')
                .that.deep.equal(errorMessage);
            });
        }
    });
}