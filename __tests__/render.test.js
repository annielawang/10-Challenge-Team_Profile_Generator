const Engineer = require("../lib/engineer");
const Manager = require("../lib/manager");
const renderHtml = require("../src/render_html_template");

describe('render html', () => {
    it('should return manager html with buildManagerHtmlCard function', () => {
    //   expect(sum(1, 2)).toBe(3);
    // input, output and expect
    const input = new Manager("ang", 12, "annielawang@gmail.com", 123);
    const output = renderHtml.buildManagerHtmlCard(input);
    const expectedString = `<div class="card mt-4 mb-2 mr-4 bg-info" style="width: 16rem; height:18rem">
    <div class="card-body mt-4">
        <h5 class="card-title">ang</h5>
        <h6 class="card-title">Manager</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: 12</li>
            <li class="list-group-item">Email: <a href="mailto:annielawang@gmail.com">annielawang@gmail.com</a></li>
            <li class="list-group-item">Office number: 123</li>
        </ul>
    </div>
</div>`;
        expect(output).toBe(expectedString);
    });
    
    it('should return engineers html', () => {
        var eng1 = new Engineer("n1", "i1", "e1", "g1");
        var eng2 = new Engineer("n1", "i1", "e1", "g1");
        var engs = [eng1, eng2];
        const output= renderHtml.buildEngineerHtmlCards(engs);
        console.log(output);

    });

  });