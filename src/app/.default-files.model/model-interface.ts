export const file = `##imports##

namespace ##namespace##
{
    public interface IService##name_up##
    {
        ViewListRetorno<List<View##name_up##>> List(int count, int page, string filter);
        View##name_up## Get(long id);
        View##name_up## New(View##name_up## view);
        View##name_up## Update(View##name_up## view);
        string Delete(long id);
        View##name_up## Ativar(long id);
        List<View##name_up##> ListAtivo();
    }
}
`
