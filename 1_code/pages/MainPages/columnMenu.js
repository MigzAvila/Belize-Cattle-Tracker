import * as React from 'react';
import{
    GridColumnMenuSort,
    GridColumnMenuFilter,
    GridColumnMenuCheckboxFilter
} from '@progress/kendo-react-grid';
import cattle_info from '../data_info/cattle_info';


export class ColumnMenu extends React.Component{
    render()
    {
        return(
            <div>
                <GridColumnMenuSort {...this.props} />
                <GridColumnMenuFilter {...this.props} />
            </div>
        );
    }
}

export class ColumnMenuCheckboxFilter extends React.Component{
    render(){
        return(
            <div>
                <GridColumnMenuCheckboxFilter {...this.props} data={cattle_info} expanded={true} />
            </div>
        )
    }
}