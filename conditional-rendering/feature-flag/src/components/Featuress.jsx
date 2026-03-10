const Features = ({featureFlags}) => {
    return (
        <>
            <h1 className="text-xl">Features:</h1>
            <ul>
                {featureFlags.map((feature) => {
                    if(feature.deperecatedFeature === false) {
                        return (
                            <li className="py-5">
                                {feature.newFeature === true && <p className="bg-red-500 text-white">NEW!</p>}
                                <p>Feature name: {feature.name}</p>
                            </li>
                        )
                    }
                })}
            </ul>
        </>
    )
}

export default Features