//Imports
import { useParams } from "react-router-dom";
import Greetings from "../../components/dashboard/Greetings";
import Statistics from "../../components/dashboard/Statistics";
import getUser from "../../utils/api/getUser";
import { useEffect, useState } from "react";
import { User } from "../../types/user";
import ErrorMessage from "../../components/common/ErrorMessage";
import LoadingIndicator from "../../components/common/LoadingIndicator";

//Exports
export default function HomePage() {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const loadData = async () => {
            setUser(await getUser(Number(id)));
            setDataLoaded(true);
        };
        loadData();
    }, [id]);
    console.log(user);

    return (
        <main>
            {dataLoaded ? (
                <>
                    {user ? (
                        <>
                            <Greetings firstName={user.firstName} />
                            <Statistics user={user} />
                        </>
                    ) : (
                        <ErrorMessage
                            message="impossible de
                        charger l'utilisateur"
                        />
                    )}
                </>
            ) : (
                <LoadingIndicator />
            )}
        </main>
    );
}
