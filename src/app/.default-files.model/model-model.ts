export const file = `##imports##

namespace ##namespace##
{
    public class ##name_up## : BaseAtivo
    {
        ##variables##

        public View##name_up## GetView()
        {
            return new View##name_up##()
            {
               ##variables_object##
            };
        }
    }
}
`
