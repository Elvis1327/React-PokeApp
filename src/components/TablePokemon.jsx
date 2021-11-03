import React from 'react';

const TablePokemon = ({handleFilterPokemon, handleNextPage, handlePrevPage}) => {
    return (
        <div className="_main-container-table-pokemon">
            <div className="buttons-page">
                <button 
                    className="btn btn-primary"
                    onClick={handlePrevPage}
                >
                    Before
                </button>
                <button 
                    className="btn btn-primary"
                    onClick={handleNextPage}
                >
                    Next
                </button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Pic</th>
                    </tr>
                </thead>
                <tbody>
                    {handleFilterPokemon().map(res => (
                        <tr key={res.id}>
                            <td>{res.id}</td>
                            <td>{res.name}</td>
                            <td>
                                <img
                                    src={res.pic} 
                                    alt="pokemon-pic" 
                                    style={{height: '100px'}}
                                    />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};
export default TablePokemon;

