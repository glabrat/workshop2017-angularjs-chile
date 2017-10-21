export class TableListController {
    columns = [];

    constructor ($attrs) {
        this.columns = $attrs.columns
            .split(/\s*,\s*/).map(item => item.split(/\s*:\s*/));

        this.data = [
                { id: 1, name: 'Pescado Rabioso'},
                { id: 2, name: 'Spinetta jade'}
            ]
    }
}

export const TableListComponent = {
    templateUrl: '/components/app/views/table-list.html',
    controller: TableListController,
    controllerAs: '$ctrl',
    bindings: {
        data: '=',
        paginate: '@?',
        type: '@',
    }
}
