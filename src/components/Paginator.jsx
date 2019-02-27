import React, { Component } from "react";

import TablePagination from '@material-ui/core/TablePagination';
import { connect } from "react-redux";
class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    handleChangePage = () =>{

    }
    onChangeRowsPerPage = () => {

    }

    render() {
        const {limit, total, count, offset} = this.props;
        return (<>
            <TablePagination
                rowsPerPageOptions={[]}
                component="div"
                count={total}
                rowsPerPage={limit}
                page={0}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
        </>)
    }


}
const MapStateToProps = (state) => {
    return state.heroes.pagination
  }
export default connect(MapStateToProps, null)(Pagination)