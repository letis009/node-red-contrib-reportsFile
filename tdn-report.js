module.exports = function(RED) {
    function TDNReportNode(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        this.on('input', function(msg, send, done) {
            try {
                const reportLogic = require('./report-logic.js');
                const result = reportLogic(msg, RED, node);
                send(result);
                if (done) done();
            } catch (err) {
                node.error("Report generation failed: " + err.message);
                if (done) done(err);
            }
        });
    }

    RED.nodes.registerType("tdn-report", TDNReportNode);
}
