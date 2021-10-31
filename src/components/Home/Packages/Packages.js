
import usePackages from '../../Hooks/usePackages';
import Package from './Package';

const Packages = () => {
    const { packages, isLoading } = usePackages();


    return (
        <div>
            <hr />
            <h1 className="text-center text-warning"><span className="text-primary">Main</span> Packages</h1>
            <hr />
            <div className="container row row-cols-1 row-cols-sm-2 row-cols-md-3 my-5 p-0 mx-0">

                {
                    packages?.map(pack => <Package
                        key={pack._id}
                        pack={pack}
                        isLoading={isLoading}
                    ></Package>)
                }
            </div>
        </div>
    );
};

export default Packages;