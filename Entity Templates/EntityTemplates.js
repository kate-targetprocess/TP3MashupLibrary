tau.mashups
    .addDependency('tp/general/view')
    .addMashup(function(view) {

        this.templates = {
            'UserStory': 'As a <I>(insert job title i.e. Planner)</I> I need <I>(insert description of what is required i.e. a ' +
                'report)</I> so I can <I>(insert benefit i.e. so I can order material.)</I>.' +
                '<BR><BR><BR>Links as needed:<BR><a href="http://it.woodgrain.com/sites/Programs/' +
                'SAP%20Implementation/COE/Customization%20Approval%20Form.docx"> Customization Approval Form</a>' +
                '<BR><a href="http://it.woodgrain.com/sites/Programs/' +
                'SAP%20Implementation/COE/Report%20Requirement%20Template.docx"> Report Requirement Template</a>',
            'Feature': '<B>Feature Description</B><BR><BR>' +
                '<B>Previous Feature we already implemented? [TP ID and/or TP Name]</B><BR>' +
                '<I>Is there new functionality needed in addition to previous feature?</I><BR>' +
                '<I>Intercompany impacts (both SAP and legacy)?</I><BR><BR>' +
                '<B>Which sites relevant to (if known)?</B><BR><BR>' +
                '<B>Summary of what is ìIn Scopeî</B><BR><BR>' +
                '<B>Summary of what is ìNot in Scopeî for this phase</B><BR><BR>' +
                '<B>Comments or Notes from Discovery Trips [or attach files]</B><BR>' +
                '<I>Make general comments on any Business impacts that come to mind for ' +
                'the business consideration (ie.  centralization of process, resource impacts, ' +
                'process improvement, business not doing today, etcÖ)</I><BR><BR>' +
                '<B>[TAKE ACTION: make sure the Feature has the correct Project, Release, Initial ' +
                'Estimate, Business Value, and BPO selected]</B><BR>' +
                '<B>[TAKE ACTION: Attach Best practice process flowchart to the Feature]</B>',
            'Task': null,
            'Request': '<B>Summary of Request/Issue:</B><BR>' +
                '<I>Describe the current business problem or situation that requires I.T. services.' +
                'Include any events or situations that led to this request including pertinent history.</I><BR><BR>' +
                '<B>Business Impact:</B><BR><I>Describe the impact that this issue is having on the business.' +
                '  Include, if possible, any lost time or incurred cost as a result of this issue, or any' +
                ' other factors that help to determine the prioritization of this request.  ' +
                '(For example, how many labor hours or other costs are being ' +
                'incurred on a daily/weekly basis due to this issue?)</I><BR><BR>' +
                '<B>Expected Results Upon Resolution:</B><BR><I>List the expected results that would ' +
                'indicate this request ' +
                'will have been completed successfully.</I><BR><BR>' +
                '<B>Requested Completion Date:</B><BR><I>Note the requested completion date ' +
                'communicated by the requestor. ' +
                'If the requestor has communicated a ìhardî deadline, please be sure to note it.' +
                '  (For example, ìrequired to ' +
                'be completed before the next month-end accounting close on August 31.î)</I>',
            'Bug': '', //put an HTML-formatted template into quotes
            'TestCase': ''
        };
        var switchResult = function(a) {
            switch (a) {
                case 'User Story':
                    return this.templates.UserStory;
                case 'Feature':
                    return this.templates.Feature;
                case 'Task':
                    return this.templates.Task;
                case 'Request':
                    return this.templates.Request;
                case 'Bug':
                    return this.templates.Bug;
                case 'Test Case':
                    return this.templates.TestCase;
                default:
                    return '';
            }
        };

        var onViewRendered = function($element) {

            var entityName = $element.find('.tau-entity-icon:first').text();

            var description = $element.find(".ui-description__inner");
            if (description) {
                if (description.find('div').length === 0) {
                    description.attr("data-placeholder", "");
                    var newDescription = switchResult(entityName);
                    if (newDescription) {
                        description.append('<div>' + newDescription + '</div>');
                    }
                }
            }

        };
        view.onRender(onViewRendered);
    });
