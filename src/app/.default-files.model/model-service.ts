export const file = `##imports##

namespace ##namespace##
{
    public class Service##name_up## : Repository<##name_up##>, IService##name_up##
    {
        private ServiceGenerico<##name_up##> service##name_up##;

        #region Constructor
        public Service##name_up##(DataContext context) : base(context)
        {
            try
            {
                service##name_up## = new ServiceGenerico<##name_up##>(context);

            }
            catch (Exception e)
            {
                throw e;
            }
        }
        #endregion

        #region ##name_up##


        public string Delete(long id)
        {
            try
            {
                service##name_up##.Delete(id);
                return "deleted";
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public ViewListRetorno<List<View##name_up##>> List(int count, int page, string filter)
        {
            try
            {
                List<View##name_up##> result = (from ##name_down## in service##name_up##.GetAll(p => true).Result
                                                    select new View##name_up##()
                                                    {

                                                        ##variables_linq_object##

                                                    }).ToList();

                var retorno = new ViewListRetorno<List<View##name_up##>>()
                {
                    Total = result.Count(),
                    Dados = result.Skip((page - 1) * count).Take(count).ToList(),
                };

                return retorno;
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        public View##name_up## Get(long id)
        {
            try
            {
                return service##name_up##.GetById(id).Result.GetView();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public View##name_up## New(View##name_up## view)
        {
            try
            {
                var model = new ##name_up##()
                {
                    ##variables_object_view##
                };
                model = service##name_up##.Insert(model).Result;
                return model.GetView();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public View##name_up## Update(View##name_up## view)
        {
            try
            {
                ##name_up## model = service##name_up##.GetById(view.id).Result;
                ##variables_object_view_model##

                service##name_up##.Update(model).Wait();
                return model.GetView();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public List<View##name_up##> ListAtivo(long idEmpresa)
        {
            try
            {
                List<View##name_up##> result = (from ##name_down## in service##name_up##.GetAll(p => true).Result
                                                where ##name_down##.Ativo == 1

                                                select new View##name_up##()
                                                {
                                                    ##variables_linq_object##

                                                }).ToList();

                return result;
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public View##name_up## Ativar(long id)
        {
            try
            {
                ##name_up## model = service##name_up##.GetById(id).Result;
                model.Ativo = (model.Ativo == 1 ? 0 : 1);

                service##name_up##.Update(model).Wait();
                return model.GetView();
            }
            catch (Exception e)
            {
                throw e;
            }
        }
        #endregion


    }
}
`
