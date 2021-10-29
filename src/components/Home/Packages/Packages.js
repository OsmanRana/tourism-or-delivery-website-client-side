
import usePackages from '../../Hooks/usePackages';
import Package from './Package';

const Packages = () => {
    const { packages } = usePackages();

    return (
        <div>
            <h1>Packages</h1>
            <div className="container row row-cols-1 row-cols-sm-2 row-cols-md-3 my-5 p-0">

                {
                    packages?.map(pack => <Package
                        key={pack._id}
                        pack={pack}
                    ></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;