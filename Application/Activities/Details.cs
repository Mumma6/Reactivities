using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;
using Application.Core;

namespace Application.Activities
{
  public class Details
  {
    public class Query : IRequest<Result<Activity>>
    {
      public Guid Id { get; set; }
    }

    public class Handler : IRequestHandler<Query, Result<Activity>>
    {
      private readonly DataContext _context;
      public Handler(DataContext context)
      {
        _context = context;
      }

      public async Task<Result<Activity>> Handle(Query request, CancellationToken cancellationToken)
      {
        var actvity = await _context.Activities.FindAsync(request.Id);

        if (actvity == null)
        {
          throw new Exception("Activity not found" + request.Id);
        }

        return Result<Activity>.Success(actvity);
      }
    }
  }
}